import React, { useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  CircularProgress,
} from "@mui/material";
import {
  getDocs,
  collection,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { auth, db } from "../firebaseConfig";
import "react-datepicker/dist/react-datepicker.css";
import { signOut } from "firebase/auth";

const AdminPage = () => {
  const [counselingData, setCounselingData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [activeTab, setActiveTab] = useState("counseling");
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const counselingSnapshot = await getDocs(
          collection(db, "counsellingForms")
        );
        const counselingList = counselingSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            date: data.date?.toDate ? data.date.toDate() : null,
          };
        });
        setCounselingData(counselingList);

        const contactSnapshot = await getDocs(collection(db, "contactForms"));
        const contactList = contactSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            date: data.date?.toDate ? data.date.toDate() : null,
          };
        });
        setContactData(contactList);
      } catch (error) {
        console.error("Error fetching data: ", error);
        toast.error("Error fetching data", { position: "bottom-right" });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [db]);

  const handleCardClick = (item) => {
    setSelectedCard(item);
  };

  const handleCloseDialog = () => {
    setSelectedCard(null);
  };

  const handleMarkAsContacted = async () => {
    if (selectedCard) {
      try {
        const docRef = doc(
          db,
          activeTab === "counseling" ? "counsellingForms" : "contactForms",
          selectedCard.id
        );

        const docSnapshot = await getDoc(docRef);

        if (!docSnapshot.exists()) {
          toast.error("Document does not exist.", {
            position: "bottom-right",
          });
        }

        await updateDoc(docRef, { contacted: true });

        setSelectedCard((prev) => ({ ...prev, contacted: true }));
        if (activeTab === "counseling") {
          setCounselingData((prev) =>
            prev.map((item) =>
              item.id === selectedCard.id ? { ...item, contacted: true } : item
            )
          );
        } else {
          setContactData((prev) =>
            prev.map((item) =>
              item.id === selectedCard.id ? { ...item, contacted: true } : item
            )
          );
        }
        toast.success("Document updated successfully!", {
          position: "bottom-right",
        });
      } catch (error) {
        console.error("Error updating document: ", error);
        toast.error("Error updating document", {
          position: "bottom-right",
        });
      }
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filterData = (data) => {
    let filteredData = [...data];

    if (filter === "contacted") {
      filteredData = filteredData.filter((item) => item.contacted);
    } else if (filter === "not_contacted") {
      filteredData = filteredData.filter((item) => !item.contacted);
    }

    if (selectedDate) {
      filteredData = filteredData.filter((item) => {
        const cardDate =
          item.date instanceof Date ? item.date : new Date(item.date);
        return cardDate.toDateString() === selectedDate.toDateString();
      });
    }

    return filteredData;
  };

  const renderCards = (data) => {
    const filteredData = filterData(data);
    return (
      <Grid container spacing={2}>
        {filteredData.length === 0 ? (
          <Typography variant="h6" color="textSecondary" align="center">
            No documents available.
          </Typography>
        ) : (
          filteredData.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card onClick={() => handleCardClick(item)}>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.contacted ? "Contacted" : "Not Contacted"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    );
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!", { position: "bottom-right" });
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Logout failed. Please try again.", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem
                button
                selected={activeTab === "counseling"}
                onClick={() => setActiveTab("counseling")}
              >
                <ListItemText primary="Counseling" />
              </ListItem>
              <ListItem
                button
                selected={activeTab === "contact"}
                onClick={() => setActiveTab("contact")}
              >
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Typography variant="h4" gutterBottom>
            {activeTab === "counseling"
              ? "Counselling Requests"
              : "Contact Messages"}
          </Typography>
          <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
            <TextField
              select
              label="Filter"
              value={filter}
              onChange={handleFilterChange}
              variant="outlined"
              size="small"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="contacted">Contacted</MenuItem>
              <MenuItem value="not_contacted">Not Contacted</MenuItem>
            </TextField>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select Date"
              className="date-picker"
            />
          </Box>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 234px)",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              {activeTab === "counseling" && renderCards(counselingData)}
              {activeTab === "contact" && renderCards(contactData)}
            </>
          )}

          {selectedCard && (
            <Dialog
              open={true}
              onClose={handleCloseDialog}
              fullWidth
              maxWidth="sm"
            >
              <DialogTitle>{selectedCard.name}</DialogTitle>
              <DialogContent>
                {Object.entries(selectedCard).map(([key, value]) => {
                  const formattedValue =
                    value instanceof Date ? value.toLocaleDateString() : value;
                  return (
                    <Typography key={key} variant="body2" gutterBottom>
                      <strong>{key}:</strong> {formattedValue}
                    </Typography>
                  );
                })}
              </DialogContent>

              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleMarkAsContacted}
                  disabled={selectedCard.contacted}
                >
                  Mark as Contacted
                </Button>
                <Button onClick={handleCloseDialog} color="secondary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
};

export default AdminPage;

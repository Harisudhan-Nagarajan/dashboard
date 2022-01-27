import "./App.css";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

export function Header() {
  return (
    <div id="header">
      <div id="left-header">
        <Paper>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search "
            label="Outlined secondary"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        {/* <TextField label="Search" id="outlined-size-small" size="small" />
        <Button variant="contained" size="large">
          <SearchIcon />
        </Button> */}
      </div>

      <div id="right-header">
        <IconButton>
          <NotificationsActiveIcon color="action" />
        </IconButton>
        <IconButton>
          <EmailIcon color="action" />
        </IconButton>
        <IconButton>
          <AccountBoxIcon color="action" />
        </IconButton>
      </div>
    </div>
  );
}

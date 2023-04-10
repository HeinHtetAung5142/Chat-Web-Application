import * as Mui from "@mui/material";

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//     chatSection: {
//       width: '100%',
//       height: '80vh'
//     },
//     headBG: {
//         backgroundColor: '#e0e0e0'
//     },
//     borderRight500: {
//         borderRight: '1px solid #e0e0e0'
//     },
//     messageArea: {
//       height: '70vh',
//       overflowY: 'auto'
//     }
//   });

const Chat = () => {
  return (
    <div>
      <Mui.Grid container>
        <Mui.Grid item xs={12}>
          <Mui.Typography variant="h5" className="header-message">
            Chat
          </Mui.Typography>
        </Mui.Grid>
      </Mui.Grid>
      <Mui.Grid
        container
        component={Mui.Paper}
        sx={{ width: "100%", height: "80vh" }}
      >
        <Mui.Grid item xs={3}>
          <Mui.List>
            <Mui.ListItem button key="RemySharp">
              <Mui.ListItemIcon>
                <Mui.Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </Mui.ListItemIcon>
              <Mui.ListItemText primary="John Wick"></Mui.ListItemText>
            </Mui.ListItem>
          </Mui.List>
          <Mui.Divider />
          <Mui.Grid item xs={12} style={{ padding: "10px" }}>
            <Mui.TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Mui.Grid>
          <Mui.Divider />
          <Mui.List>
            <Mui.ListItem button key="RemySharp">
              <Mui.ListItemIcon>
                <Mui.Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </Mui.ListItemIcon>
              <Mui.ListItemText primary="Remy Sharp">
                Remy Sharp
              </Mui.ListItemText>
              <Mui.ListItemText secondary="online"></Mui.ListItemText>
            </Mui.ListItem>
            <Mui.ListItem button key="Alice">
              <Mui.ListItemIcon>
                <Mui.Avatar
                  alt="Alice"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </Mui.ListItemIcon>
              <Mui.ListItemText primary="Alice">Alice</Mui.ListItemText>
            </Mui.ListItem>
            <Mui.ListItem button key="CindyBaker">
              <Mui.ListItemIcon>
                <Mui.Avatar
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </Mui.ListItemIcon>
              <Mui.ListItemText primary="Cindy Baker">
                Cindy Baker
              </Mui.ListItemText>
            </Mui.ListItem>
          </Mui.List>
        </Mui.Grid>
        <Mui.Grid item xs={9}>
          <Mui.List>
            <Mui.ListItem key="1">
              <Mui.Grid container>
                <Mui.Grid item xs={12}>
                  <Mui.ListItemText primary="Hey man, What's up ?"></Mui.ListItemText>
                </Mui.Grid>
                <Mui.Grid item xs={12}>
                  <Mui.ListItemText secondary="09:30"></Mui.ListItemText>
                </Mui.Grid>
              </Mui.Grid>
            </Mui.ListItem>
            <Mui.ListItem key="2">
              <Mui.Grid container>
                <Mui.Grid item xs={12}>
                  <Mui.ListItemText primary="Hey, Iam Good! What about you ?"></Mui.ListItemText>
                </Mui.Grid>
                <Mui.Grid item xs={12}>
                  <Mui.ListItemText secondary="09:31"></Mui.ListItemText>
                </Mui.Grid>
              </Mui.Grid>
            </Mui.ListItem>
            <Mui.ListItem key="3">
              <Mui.Grid container>
                <Mui.Grid item xs={12}>
                  <Mui.ListItemText primary="Cool. i am good, let's catch up!"></Mui.ListItemText>
                </Mui.Grid>
                <Mui.Grid item xs={12}>
                  <Mui.ListItemText secondary="10:30"></Mui.ListItemText>
                </Mui.Grid>
              </Mui.Grid>
            </Mui.ListItem>
          </Mui.List>
          <Mui.Divider />
          <Mui.Grid container style={{ padding: "20px" }}>
            <Mui.Grid item xs={11}>
              <Mui.TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
    </div>
  );
};

export default Chat;

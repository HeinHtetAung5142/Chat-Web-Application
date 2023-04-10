import * as Mui from "@mui/material";

const Chat = () => {
  return (
    <div>
      <Mui.Grid
        container
        component={Mui.Paper}
        sx={{ width: "100%", height: "100vh" }}
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
          </Mui.List>
        </Mui.Grid>
        <Mui.Grid item xs={9}>
          <Mui.List>
            <Mui.ListItem button key="Alice">
              <Mui.ListItemIcon>
                <Mui.Avatar
                  alt="Alice"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </Mui.ListItemIcon>
              <Mui.ListItemText primary="Alice">Alice</Mui.ListItemText>
              <Mui.ListItemText
                sx={{ textAlign: "right" }}
                secondary="Last seen 4mins ago"
              ></Mui.ListItemText>
            </Mui.ListItem>
          </Mui.List>
          <Mui.Divider />
          <Mui.List>
            <Mui.ListItem key="1">
              <Mui.Grid container>
                <Mui.Grid item xs={12}>
                  <Mui.ListItemText primary="User 1"></Mui.ListItemText>
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
                  <Mui.ListItemText primary="User 2"></Mui.ListItemText>
                  <Mui.ListItemText primary="Hey, I am Good! What about you ?"></Mui.ListItemText>
                </Mui.Grid>
                <Mui.Grid item xs={12}>
                  <Mui.ListItemText secondary="09:31"></Mui.ListItemText>
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

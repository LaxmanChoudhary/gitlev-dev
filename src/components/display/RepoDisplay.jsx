import { Avatar, Card, CardContent, CardHeader, Chip, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  chip: (repo) => {
    if (repo.language) {
      if (repo.language.toLowerCase() == "python") {
        return {
          backgroundColor: "#3f51b5",
          color: "#fff"
        };
      }
      if (repo.language.toLowerCase() == "javascript") {
        return {
          backgroundColor: "#fdd835",
          color: "#fff"
        };
      }
      if (repo.language.toLowerCase() == "c") {
        return {
          backgroundColor: "#e91e63",
          color: "#fff"
        };
      }
      if (repo.language.toLowerCase() == "c++") {
        return {
          backgroundColor: "#9c27b0",
          color: "#fff"
        };
      }
      if (repo.language.toLowerCase() == "html") {
        return {
          backgroundColor: "#2196f3",
          color: "#fff"
        };
      }
      if (repo.language.toLowerCase() == "ruby") {
        return {
          backgroundColor: "#f50057",
          color: "#fff"
        };
      }
      if (repo.language.toLowerCase() == "typescript") {
        return {
          backgroundColor: "#0d47a1",
          color: "#fff"
        };
      }
      if (repo.language.toLowerCase() == "css") {
        return {
          backgroundColor: "#009688",
          color: "#fff"
        };
      }
    }
  },
}));

const RepoDisplay = ({ repo }) => {
  const classes = useStyles(repo);
  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader
        disableTypography
        action={
          <IconButton onClick={() => window.open(repo.html_url, "_blank")}>
            <GitHubIcon />
          </IconButton>
        }
        title={<Typography variant="h6">{repo.name}</Typography>}
        subheader={<Typography variant="body2">{repo.description}</Typography>}
      />
      <CardContent>
        {repo.language ? (
          <Chip
            className={classes.chip}
            size="small"
            className={classes.chip}
            label={repo.language}
          />
        ) : null}
      </CardContent>
    </Card>
  );
};

export default RepoDisplay;

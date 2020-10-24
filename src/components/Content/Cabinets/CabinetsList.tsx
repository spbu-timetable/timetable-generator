import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { Add } from "@material-ui/icons";
import React from "react";
import Cabinet from "../../../types/Cabinet";
import style from "./style.module.css";

type Props = {
  didGet: boolean;
  oid: string;
  cabinets: Cabinet[];

  getCabinets: (oid: string) => void;
  selectCabinet: (cabinet: Cabinet) => void;
};

const CabinetsList = (props: Props) => {
  let cabinets_component;

  if (props.didGet) {
    cabinets_component = props.cabinets.map((cabinet: Cabinet) => (
      <ListItem button onClick={() => props.selectCabinet(cabinet)}>
        <ListItemText primary={cabinet.DisplayName1} />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => props.selectCabinet(cabinet)}>
            <Add />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  } else {
    props.getCabinets(props.oid);
  }

  return (
    <>
      {" "}
      {props.didGet ? (
        <List className={style.list}>{cabinets_component}</List>
      ) : (
        <CircularProgress className={style.progress} />
      )}
    </>
  );
};

export default CabinetsList;
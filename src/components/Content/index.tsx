import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Addresses from "./Addresses/container";
import Cabinets from "./Addresses/Cabinets/container";
import Faculties from "./Faculties/container";
import Groups from "./Faculties/StudyLevels/EducationProgram/EducationYears/Groups/container";
import Main from "./Main";
import style from "./style.module.css";
import Educators from "./Educators/container";
import Timetable from "../Reusable/Timetable/container";
import StudyLevel from "./Faculties/StudyLevels/container";
import EducationalProgram from "./Faculties/StudyLevels/EducationProgram/container";
import EducationYears from "./Faculties/StudyLevels/EducationProgram/EducationYears/container";
import Header from "../Header/container";
import Bookmarks from "./Bookmarks/container";
import SavedCabinets from "./Bookmarks/SavedCabinets/container";
import SavedEducators from "./Bookmarks/SavedEducators/container";
import SavedGroups from "./Bookmarks/SavedGroups/container";

type Props = {
  needToRegister: boolean;
  showLoginBtn: () => void;
};

const Content = (props: Props) => {
  props.showLoginBtn();

  if (props.needToRegister) {
    return <Redirect to="/registration" />;
  }

  return (
    <div className={style.content}>
      <Header />
      <Switch>
        <Route path="/addresses/cabinets" component={() => <Cabinets />} />
        <Route path="/addresses" component={() => <Addresses />} />

        <Route path="/teachers" component={() => <Educators />} />

        <Route path="/faculties/studyLevels/educationalPrograms/educationYears/Groups" component={() => <Groups />} />
        <Route path="/faculties/studyLevels/educationalPrograms/educationYears" component={() => <EducationYears />} />
        <Route path="/faculties/studyLevels/educationalPrograms" component={() => <EducationalProgram />} />
        <Route path="/faculties/studyLevels" component={() => <StudyLevel />} />
        <Route path="/faculties" component={() => <Faculties />} />

        <Route path="/bookmarks/cabinets" component={() => <SavedCabinets />} />
        <Route path="/bookmarks/educators" component={() => <SavedEducators />} />
        <Route path="/bookmarks/groups" component={() => <SavedGroups />} />
        <Route path="/bookmarks" component={() => <Bookmarks />} />

        <Route path="/timetable" component={() => <Timetable />} />

        <Route path="/" component={() => <Main />} />
      </Switch>
    </div>
  );
};

export default Content;

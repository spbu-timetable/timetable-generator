import { connect } from "react-redux";
import { CombinedState } from "redux";
import Educators from ".";
import educatorAC from "../../../store/actionCreators/educatorAC";
import Action from "../../../types/Action";
import Educator from "../../../types/Educator";
import Header from "../../../types/Header";
import EducatorsPage from "../../../types/pages/EducatorsPage";

function mapStateToProps(
  state: CombinedState<{
    header: Header;
    educators: EducatorsPage;
  }>
) {
  return {
    didGet: state.educators.didGet,
    filter_value: state.educators.filter_value,
    filtered_educators: state.educators.filtered_educators,
    selected_educators: state.educators.selected_educators,

    fromDate: state.header.fromDate,
    toDate: state.header.toDate,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    selectEducator: (educator: Educator) => {
      dispatch(educatorAC.selectEducator(educator));
    },

    deselectEducator: (educator: Educator) => {
      dispatch(educatorAC.deselectEducator(educator));
    },

    updFilter: (filter_value: string) => {
      dispatch(educatorAC.updFilter(filter_value));
    },
    updFilterValue: (filterStr: string) => {
      dispatch(educatorAC.updFilterValue(filterStr));
    },

    getEducatorsTimetable: (selected_educators: Educator[], fromDate?: Date, toDate?: Date) => {
      dispatch(educatorAC.getEducatorTimetable(selected_educators, fromDate!, toDate!));
    },
  };
}

const EducatorsContainer = connect(mapStateToProps, mapDispatchToProps)(Educators);

export default EducatorsContainer;

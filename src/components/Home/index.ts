import { compose } from "recompose";
import { connect } from "react-redux";
import { initCatalog } from "../../actions/index";
import { selectCatalog, isCatalogLoaded } from "../../selectors/catalog";
import { IState } from "@typings/state/index";
import Home, { Props } from "./Home";

const mapStateToProps = (state: IState) => ({
  catalog: selectCatalog(state),
  catalogLoaded: isCatalogLoaded(state),
});

const actions = { initCatalog };

export default compose<Props, {}>(connect(mapStateToProps, actions))(Home);

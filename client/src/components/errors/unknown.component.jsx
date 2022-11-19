import { Link } from "react-router-dom";
import bg from "../../assets/img/something-went-wrong.png";

function UnknownError() {
  return (
    <>
      <div
        className="div-block-440"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="header _404_div wf-section">
        <div className="div-block-442 header_home_strategy">
          <div className="div-block-441 text_404">
            <h1 className="heading_h2">OOPS!</h1>
            <h1 className="paragraph-3 _404_paragraph">
              Something went wrong
              <strong>
                <br />
              </strong>
            </h1>
            <Link to="/dashboard" className="button-8 w-button">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnknownError;

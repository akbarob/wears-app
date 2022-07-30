import { Spinner } from "react-bootstrap";
export const Loading = () => {
    return(
        <div className="col-12">
<Spinner
          as="span"
          animation="grow"
          size="lg"
          role="status"
          aria-hidden="true"
        />            <p>Loadi . . . Loadin . . . Loading . . .</p>
        </div>
    );
};
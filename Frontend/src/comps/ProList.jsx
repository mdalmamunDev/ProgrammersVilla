import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ProListRander from "./ProListRander";
import { useState } from "react";

const ProList = ({ proList, setRoot, setPro }) => {

  if (!proList || proList.length === 0)
    return (
      <h3 className="text-center text-danger pb-5">No data to show</h3>
    );



  const [moreProOpen, setMoreProOpen] = useState(false);

  let rowInd = 0;
  let rows = [rowInd++, rowInd++];

  if (moreProOpen)
    for (let i = 2; i < Math.ceil(proList.length / 3); i++) {
      rows.push(rowInd++);
    }

  return (
    <>
      <div className="container text-center">
        <hr />
        <h2 className="mb-4">Our Top Programmers</h2>

        <ProListRander
          proList={proList}
          rows={rows}
          setRoot={setRoot}
          setPro={setPro}
        />
      </div>


      {!moreProOpen &&
        <FontAwesomeIcon
          icon={faChevronDown}
          className="d-block m-auto p-2 mb-5 btn my-icon more-less-btn"
          onClick={() => { setMoreProOpen(true) }}
        />
      }
      {moreProOpen &&
        <FontAwesomeIcon
          icon={faChevronUp}
          className="d-block m-auto p-2 mb-5 btn my-icon more-less-btn"
          onClick={() => { setMoreProOpen(false) }}
        />
      }
    </>
  )
}

export default ProList;
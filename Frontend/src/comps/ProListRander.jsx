import ProCard from "./ProCard"

const ProListRander = ({ proList, setProInfo, rows }) => {
  let row = 0;

  return (
    <>
      {/* Render two rows */
        rows.map((rowIndex) => (
          <div className="row mb-3" key={rowIndex}>
            {/* Render three ProCard components in each row */
              [0, 1, 2].map((colIndex) => {
                const item = proList[rowIndex * 3 + colIndex];

                if (item)
                  return (
                    <div className="col-4" key={colIndex}>
                      <ProCard pro={item} setProInfo={setProInfo} />
                    </div>
                  )
              })
            }
          </div>
        ))
      }
    </>
  )
}

export default ProListRander;
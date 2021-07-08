import { CopyToClipboard } from "react-copy-to-clipboard";
import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function BrandPalette({ area, color, rgb, cmyk }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isCopied) setIsCopied(false);
    }, 4000);
  }, [isCopied]);

  const handleCopy = () => {
    setIsCopied(true);
  };

  return (
    <>
<Col md={3} lg={3} xl={2} className="my-1">
      <CopyToClipboard text={`${color}`} onCopy={handleCopy}>
        <div className="card pointer-event">
          <div
            className="card-img-top btn text-white"
            style={{ backgroundColor: `${color}`, minHeight: "100px" }}
            >
            {!isCopied && <small>click to copy</small>}
            {isCopied && <small>copied</small>}
          </div>
          <div className="card-body">
            <h5 className="card-title">{area}</h5>

            <p className="btn btn-light btn-block">{color}</p>

            <p className="card-text">
              <strong>RGB:</strong>
              <br /> {rgb}
            </p>
            <p className="card-text">
              <strong>CMYK:</strong> {cmyk}
            </p>
          </div>
        </div>
      </CopyToClipboard>
              </Col>
    </>
  );
}

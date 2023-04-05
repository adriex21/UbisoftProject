
function PhotoOutput({ processedTranslationResponse, processedImageResponse }) {
    return (
      <div className="output-area" style={{ borderStyle: "solid", position:"relative" }}>
        <div style={{ height: "512px",width:"512px",}}>
          <div style={{ position: "absolute", top: 0 }}>
            <img src={processedImageResponse} width="512px" height="512px" />
          </div>
          <div className="translatedText" style={{ fontSize: "300%", wordBreak: "breakAll", top:"35%", width:"100%", position: "absolute", color:"white"}}>
            <center><b>{processedTranslationResponse}</b></center>
          </div>
        </div>
      </div>
    );
  }

export default PhotoOutput;


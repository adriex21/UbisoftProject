
function PhotoOutput({ processedTranslationResponse, processedImageResponse }) {
    return (
      <div className="output-area" style={{ position:"relative" }}>
        <div style={{ height: "512px",width:"512px",}}>
          <div style={{ position: "absolute", top: 0 }}>
            <img src={processedImageResponse} width="512px" height="512px" />
          </div>
          <div className="translatedText" style={{color:"white", webkitTextStrokeWidth: "1px", webkitTextStrokeColor: "black", 
          fontFamily:"Impact",fontSize: "300%", wordBreak: "breakAll", width:"100%", position: "absolute", lineHeight:"6", wordSpacing:"5px"}}>
            <center><b>{processedTranslationResponse}</b></center>
          </div>
        </div>
      </div>
    );
  }

export default PhotoOutput;


function ChatInput({ handleChange, handleClick}) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
          <div className="input-area">
            <form className="input-container" onSubmit={(e) => handleSubmit(e)}>
              <input type="text" placeholder="Type your message here" id="user-input" onChange={(e) => handleChange(e.target.value)} />
              <button type="submit" onClick={handleClick}><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
    
        </div>
      );
}

export default ChatInput;
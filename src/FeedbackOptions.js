import React from "react"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(type => (
                <div>
                    <button
                        key={type.toString()}
                        type="button"
                        onClick={() => onLeaveFeedback(type)}
                    >
                        {type}
                    </button>
                </div>
            ))}
        </>
    );
};

export default FeedbackOptions;
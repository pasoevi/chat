import React from "react";

export interface SendButtonProps {
    onClick: () => void;
}

export const SendButton: React.FC<SendButtonProps> = React.memo((props) => {
    return <button onClick={props.onClick} />;
});

import Usegetconversations from "../../hooks/useGetConversations.js";
import Singleconversation from "./singleConversation.jsx";

const Conversations = () => {
    const { loading, conversations } = Usegetconversations();
    return (
        <div className="py-2 flex flex-col overflow-auto">

            {conversations.map((conversation, idx) => (
                <Singleconversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}

            {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
        </div>
    )
}

export default Conversations;
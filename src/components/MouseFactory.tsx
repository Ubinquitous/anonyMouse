import { dbService } from "fbase";
import * as React from "react";

const MouseFactory = ({ userObj }: any) => {
    const [mouse, setMouse] = React.useState("");
    const onSubmit = async (event: any) => {
        if (mouse === "") {
            return;
        }
        event.preventDefault();
        await dbService.collection("mouses").add({
            text: mouse,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setMouse("");
    };
    const onChange = (event: any) => {
        const { target: { value }
        } = event;
        setMouse(value);
    }

    return (
        <form onSubmit={onSubmit} className="factoryForm">
            <div className="factoryInput__container">
                <input
                    className="factoryInput__input"
                    value={mouse}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120} />
                <input
                    type="submit"
                    value="&rarr;"
                    className="factoryInput__arrow"
                />
            </div>
            <label htmlFor="attach-file" className="factoryInput__label"></label>
        </form>
    );
};

export default MouseFactory;
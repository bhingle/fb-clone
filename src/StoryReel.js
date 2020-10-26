import React from 'react'
import Story from './Story';
import './StoryReel.css';
function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image="https://picsum.photos/200/300"
            profileSrc="https://picsum.photos/200"
            title="Rahul Bhatt"
            />
            <Story
            image="https://picsum.photos/201/301"
            profileSrc="https://picsum.photos/201"
            title="Ali Bhatt"
            />
            <Story
            image="https://picsum.photos/202/302"
            profileSrc="https://picsum.photos/202"
            title="Soham Kulkarni"
            />
            <Story
            image="https://picsum.photos/203/303"
            profileSrc="https://picsum.photos/203"
            title="Rohan Surve"
            />
            <Story
            image="https://picsum.photos/204/304"
            profileSrc="https://picsum.photos/204"
            title="Shubham Patel"
            />
        </div>
    )
}

export default StoryReel

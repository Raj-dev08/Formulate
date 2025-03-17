"use client";



const PromptCard = ({ post, handleTagClick }) => {

  return (
    <div className="prompt_card">
        <p className="text-xl">{post.creator.username}</p>
        <p className="text-lg">{post.creator.email}</p><br/>
        <p className="text-3xl bg-yellow-100">{post.formula}</p><br/>
        <p className="text-lg text-blue-500" onClick={()=>handleTagClick(post.tag)}>#{post.tag}</p>   
    </div>
  );
};

export default PromptCard;
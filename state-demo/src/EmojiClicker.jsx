import { useState } from "react";
import { v4 as uuid } from "uuid";

function randEmoji() {
	const lst = ["🥴", "😵", "🤨", "🤮"];
	return lst[Math.floor(Math.random() * lst.length)];
}

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{id: uuid(), emoji: randEmoji()}]);
	const addEmoji = () => {
		setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: randEmoji()}]);
	}
	const deleteEmoji = (id) => {
		setEmojis((oldEmojis) => oldEmojis.filter(e => e.id !== id));
	}
	const drinkify = () => {
		setEmojis(
			(oldEmojis) => oldEmojis.map(e => 
				{
					return {
						...e, 
						emoji: "🥴"
					}
			})
		);
	}
  return (
    <div>
			{emojis.map((e) => (
				<span 
					onClick={() => deleteEmoji(e.id)} 
					key={e.id} 
					style={{fontSize: "4rem", cursor: "pointer"}}
				>
					{e.emoji}
				</span>
			))}
      <button onClick={addEmoji}>Add Emoji</button>
			<button onClick={drinkify}>Make them all drunk</button>
    </div>
  );
}
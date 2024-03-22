'use client'
import { useState } from "react";
import { cham_name_kr } from "../data/champion"

export default function Write() {
    const cham_name = cham_name_kr;
    const [inputValue, setInputValue] = useState('');
    const [filteredChampions, setFilteredChampions] = useState([]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);

        if (value) {
            const filtered = cham_name.filter(champion =>
                champion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredChampions(filtered);
        } else {
            setFilteredChampions([]);
        }
    };


    const handleChampionSelect = (champion) => {
        setInputValue(champion);
        setFilteredChampions([]); // 추천 목록 비우기
    };

    return (
        <div>
            <form action="/api/post/new" method="POST">
                <h4 className="char3">라인
                    <select name="line">
                        <option value="탑">탑</option>
                        <option value="정글">정글</option>
                        <option value="미드">미드</option>
                        <option value="원딜">원딜</option>
                        <option value="서폿">서폿</option>
                    </select></h4>
                <h4 className="char1">내챔
                    <input className="input-search" type="text" name="cham1" placeholder="내챔" value={inputValue} onChange={handleInputChange} autocomplete='off' />
                    {inputValue && (
                        <ul className="search-results">
                            {filteredChampions.map((champion, index) => (
                                <li key={index} onClick={() => handleChampionSelect(champion)}>
                                    <img src={`./image/Aatrox_0.jpg`} alt={champion.name} />
                                    {champion}
                                </li>
                            ))}
                        </ul>
                    )}
                </h4>
                <h4 className="char2">니챔<input name="cham2" placeholder="니챔" autocomplete='off'></input></h4>
                <h4 className="char3">6전<input name="before6" placeholder="6전" autocomplete='off'></input></h4>
                <h4 className="char3">6후<input name="after6" placeholder="6후" autocomplete='off'></input></h4>
                <h4 className="char3">사이드<input name="side" placeholder="사이드" autocomplete='off'></input></h4>
                <h4 className="char1">룬<input name="rune1" placeholder="룬" autocomplete='off'></input></h4>
                <h4 className="char2">룬<input name="rune2" placeholder="룬" autocomplete='off'></input></h4>
                <h4 className="char1">스펠<input name="spell1" placeholder="스펠" autocomplete='off'></input></h4>
                <h4 className="char1">스펠<input name="spell11" placeholder="스펠" autocomplete='off'></input></h4>
                <h4 className="char2">스펠<input name="spell2" placeholder="스펠" autocomplete='off'></input></h4>
                <h4 className="char2">스펠<input name="spell22" placeholder="스펠" autocomplete='off'></input></h4>
                <h4 className="char3">한줄평<input name="review" placeholder="한줄평" autocomplete='off'></input></h4>
                <button type="submit">전송하기</button>
            </form>
        </div>
    )
}
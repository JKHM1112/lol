'use client'
import { useState } from "react";
import { cham_name_kr } from "../data/champion"
import { cham_name_en } from "../data/champion"
export default function Write() {

    const cham_name_kr1 = cham_name_kr;
    const cham_name_en1 = cham_name_en;
    const [selectedLine, setSelectedLine] = useState('')
    const handleLineChange = (event) => {
        setSelectedLine(event.target.value)
    }
    return (
        <div>
            <form action="/api/post/new" method="POST">
                <h4 className="char3">라인
                    <select name="line" onChange={handleLineChange}>
                        <option value="empty" selected disabled>선택</option>
                        <option value="탑">탑</option>
                        <option value="정글">정글</option>
                        <option value="미드">미드</option>
                        <option value="원딜">원딜</option>
                        <option value="서폿">서폿</option>
                    </select></h4>

                {selectedLine == "탑" ? (
                    <div>
                        <h4 className="char1">탑<input name="cham1" placeholder="내챔"></input></h4>
                        <h4 className="char2">탑<input name="cham2" placeholder="니챔"></input></h4>
                    </div>
                ) : null
                }
                {selectedLine == "정글" ? (
                    <div>
                        <h4 className="char1">내챔<input name="cham1" placeholder="내챔"></input></h4>
                        <h4 className="char2">니챔<input name="cham2" placeholder="니챔"></input></h4>
                    </div>
                ) : null
                }
                {selectedLine == "미드" ? (
                    <div>
                        <h4 className="char1">미드<input name="cham1" placeholder="내챔"></input></h4>
                        <h4 className="char2">미드<input name="cham2" placeholder="니챔"></input></h4>
                    </div>
                ) : null
                }
                {selectedLine == "원딜" ? (
                    <div>
                        <h4 className="char1">원딜<input name="cham1" placeholder="내챔"></input></h4>
                        <h4 className="char2">원딜<input name="cham2" placeholder="니챔"></input></h4>
                        <h4 className="char1">서폿<input name="cham3" placeholder="내챔"></input></h4>
                        <h4 className="char2">서폿<input name="cham4" placeholder="니챔"></input></h4>
                    </div>
                ) : null
            }
                {selectedLine == "서폿" ? (
                    <div>
                        <h4 className="char1">원딜<input name="cham1" placeholder="내챔"></input></h4>
                        <h4 className="char2">원딜<input name="cham2" placeholder="니챔"></input></h4>
                        <h4 className="char1">서폿<input name="cham3" placeholder="내챔"></input></h4>
                        <h4 className="char2">서폿<input name="cham4" placeholder="니챔"></input></h4>
                    </div>
                ) : null
                }
                <h4 className="char3">6전<input name="before6" placeholder="6전"></input></h4>
                <h4 className="char3">6후<input name="after6" placeholder="6후"></input></h4>
                <h4 className="char3">후반<input name="half" placeholder="후반"></input></h4>
                <h4 className="char1">룬<input name="rune1" placeholder="룬"></input></h4>
                <h4 className="char2">룬<input name="rune2" placeholder="룬"></input></h4>
                <h4 className="char1">스펠<input name="spell1" placeholder="스펠"></input></h4>
                <h4 className="char1">스펠<input name="spell11" placeholder="스펠"></input></h4>
                <h4 className="char2">스펠<input name="spell2" placeholder="스펠"></input></h4>
                <h4 className="char2">스펠<input name="spell22" placeholder="스펠"></input></h4>
                {selectedLine == "정글" ? (
                    <div>
                        <h4 className="char3">오브젝트<input name="objectJ" placeholder="오브젝트"></input></h4>
                    </div>
                ) : null
                }
                <h4 className="char3">승/패<input name="winorlose" placeholder="승/패"></input></h4>
                <h4 className="char3">한줄평<input name="review" placeholder="한줄평"></input></h4>
                <button type="submit">전송하기</button>
            </form>
        </div>
    )
}
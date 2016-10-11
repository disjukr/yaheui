(function () {
"use strict";
class YaksokList extends Array {
    get 길이() {
        return (this[0] === void 0) ? this.length - 1 : this.length;
    }
    *[Symbol.iterator]() {
        for (
            let i = this[0] === void 0 ? 1 : 0;
            i < this.length;
            ++i
        ) yield this[i];
    }
    toJsArray() {
        let copy = this.slice();
        copy.shift();
        return copy;
    }
}
YaksokList.prototype.isYaksokList = true;
function yaksokList(array) {
    array.constructor = YaksokList;
    array.__proto__ = YaksokList.prototype;
    return array;
}
function yaksokRange(start, stop) {
    return {
        get 시작() { return start; },
        get 끝() { return stop; },
        [Symbol.iterator]: function* () {
            for (let i = start; i <= stop; ++i) yield i;
        }
    };
}
function yaksokCall(yaksok, args) {
    return args ? yaksok(...(args.toJsArray())) : yaksok();
}
function yaksokLog(value) {
    switch (typeof value) {
    case 'boolean': console.log(value ? '참' : '거짓'); return;
    case 'object': {
        if (value.isYaksokList) {
            console.log(value.toJsArray());
        } else {
            console.log(value);
        }
    } return;
    case 'undefined': console.log('()'); return;
    default: console.log(value); return;
    }
}
let yaksokModules = {
    "common:파일": {},
    "common:입출력": {},
    "common:문자열": {},
    "common:숫자": {},
    "common:배열": {},
    "common:저장공간": {},
    "common:아희": {},
    "common:메인": {} // entry point
};

// module: common:파일
(function () {
function ys_0__경로_텍스트_읽기(경로) {
    return require('fs').readFileSync(경로, 'utf8');
}
{ // exports
    var ys_m = yaksokModules["common:파일"];
    ys_m.ys_0__경로_텍스트_읽기 = ys_0__경로_텍스트_읽기;
}
})();

// module: common:입출력
(function () {
yaksokList([void 0]);
function ys_1_실행인자() {
    return yaksokList([void 0, ...process.argv]);
}
function ys_2__결과코드를_뱉으며_종료(결과코드) {
    process.exit(결과코드 | 0);
}
function ys_3_표준출력에_값_쓰기(값) {
    process.stdout.write(값 ? 값.toString() : '');
}
function ys_4_표준오류에_값_쓰기(값) {
    process.stderr.write(값 ? 값.toString() : '');
}
{ // exports
    var ys_m = yaksokModules["common:입출력"];
    ys_m.ys_1_실행인자 = ys_1_실행인자;
    ys_m.ys_2__결과코드를_뱉으며_종료 = ys_2__결과코드를_뱉으며_종료;
    ys_m.ys_3_표준출력에_값_쓰기 = ys_3_표준출력에_값_쓰기;
    ys_m.ys_4_표준오류에_값_쓰기 = ys_4_표준오류에_값_쓰기;
}
})();

// module: common:문자열
(function () {
yaksokList([void 0]);
function ys_5__문자의_코드포인트(문자) {
    return 문자.charCodeAt(0);
    // codePointAt
}
function ys_6__코드포인트에_해당하는_문자(코드포인트) {
    return String.fromCharCode(코드포인트);
    // fromCodePoint
}
function ys_7_줄바꿈_문자() {
    return '\n';
}
function ys_8__문자열_줄바꿈마다_쪼개기(문자열) {
    return yaksokList([void 0, ...문자열.split(/\r?\n/g)]);
}
function ys_9__문자열_글자마다_쪼개기(문자열) {
    return yaksokList([void 0, ...문자열.split('')]);
}
{ // exports
    var ys_m = yaksokModules["common:문자열"];
    ys_m.ys_5__문자의_코드포인트 = ys_5__문자의_코드포인트;
    ys_m.ys_6__코드포인트에_해당하는_문자 = ys_6__코드포인트에_해당하는_문자;
    ys_m.ys_7_줄바꿈_문자 = ys_7_줄바꿈_문자;
    ys_m.ys_8__문자열_줄바꿈마다_쪼개기 = ys_8__문자열_줄바꿈마다_쪼개기;
    ys_m.ys_9__문자열_글자마다_쪼개기 = ys_9__문자열_글자마다_쪼개기;
}
})();

// module: common:숫자
(function () {
function ys_10__숫자_소수점_아래_버림(숫자) {
    return 숫자 | 0;
}
function ys_11__숫자_n자리_버림(숫자, n) {
    var 단위 = Math.pow(10, n);
    return ((숫자 / 단위) | 0) * 단위;
}
{ // exports
    var ys_m = yaksokModules["common:숫자"];
    ys_m.ys_10__숫자_소수점_아래_버림 = ys_10__숫자_소수점_아래_버림;
    ys_m.ys_11__숫자_n자리_버림 = ys_11__숫자_n자리_버림;
}
})();

// module: common:배열
(function () {
yaksokList([void 0]);
function ys_12__배열의_마지막에_값_넣기(배열, 값) {
    배열.push(값);
}
function ys_13__배열의_마지막에서_값_빼기(배열) {
    if (배열 instanceof YaksokList) {
        if (배열.길이 > 0) {
            return 배열.pop();
        }
        return void 0;
    } else {
        return 배열.pop();
    }
}
function ys_14__배열의_시작에_값_넣기(배열, 값) {
    if (배열 instanceof YaksokList) {
        배열.splice(1, 0, 값);
    } else {
        배열.unshift(값);
    }
}
function ys_15__배열의_시작에서_값_빼기(배열) {
    if (배열 instanceof YaksokList) {
        if (배열.길이 > 0) {
            return 배열.splice(1, 1)[0];
        } else {
            return void 0;
        }
    } else {
        return 배열.shift();
    }
}
function ys_16__배열의_처음_항목(배열) {
    if (배열 instanceof YaksokList) {
        return 배열[1];
    } else {
        return 배열[0];
    }
}
function ys_17__배열의_마지막_항목(배열) {
    var 결과;
    결과 = 배열[배열.길이];
    return 결과;
}
{ // exports
    var ys_m = yaksokModules["common:배열"];
    ys_m.ys_12__배열의_마지막에_값_넣기 = ys_12__배열의_마지막에_값_넣기;
    ys_m.ys_13__배열의_마지막에서_값_빼기 = ys_13__배열의_마지막에서_값_빼기;
    ys_m.ys_14__배열의_시작에_값_넣기 = ys_14__배열의_시작에_값_넣기;
    ys_m.ys_15__배열의_시작에서_값_빼기 = ys_15__배열의_시작에서_값_빼기;
    ys_m.ys_16__배열의_처음_항목 = ys_16__배열의_처음_항목;
    ys_m.ys_17__배열의_마지막_항목 = ys_17__배열의_마지막_항목;
}
})();

// module: common:저장공간
(function () {
var ys_m_배열 = yaksokModules["common:배열"];
function ys_18_스택_생성() {
    var 결과;
    var 저장공간 = yaksokList([void 0]);
    function ys_19_중복() {
        var 결과;
        ys_m_배열.ys_12__배열의_마지막에_값_넣기(저장공간, ys_m_배열.ys_17__배열의_마지막_항목(저장공간));
        return 결과;
    }
    function ys_20_바꿔치기() {
        var 결과;
        var 가 = ys_m_배열.ys_13__배열의_마지막에서_값_빼기(저장공간);
        var 나 = ys_m_배열.ys_13__배열의_마지막에서_값_빼기(저장공간);
        ys_m_배열.ys_12__배열의_마지막에_값_넣기(저장공간, 가);
        ys_m_배열.ys_12__배열의_마지막에_값_넣기(저장공간, 나);
        return 결과;
    }
    결과 = {내용: 저장공간, 집어넣기: ((_0)=>ys_m_배열.ys_12__배열의_마지막에_값_넣기(저장공간,_0)), 뽑기: (_=>ys_m_배열.ys_13__배열의_마지막에서_값_빼기(저장공간)), 중복: (_=>ys_19_중복()), 바꿔치기: (_=>ys_20_바꿔치기())};
    return 결과;
}
function ys_21_큐_생성() {
    var 결과;
    var 저장공간 = yaksokList([void 0]);
    function ys_22_중복() {
        var 결과;
        ys_m_배열.ys_14__배열의_시작에_값_넣기(저장공간, ys_m_배열.ys_16__배열의_처음_항목(저장공간));
        return 결과;
    }
    function ys_23_바꿔치기() {
        var 결과;
        var 임시 = 저장공간[1];
        저장공간[1] = 저장공간[2];
        저장공간[2] = 임시;
        return 결과;
    }
    결과 = {내용: 저장공간, 집어넣기: ((_0)=>ys_m_배열.ys_12__배열의_마지막에_값_넣기(저장공간,_0)), 뽑기: (_=>ys_m_배열.ys_15__배열의_시작에서_값_빼기(저장공간)), 중복: (_=>ys_22_중복()), 바꿔치기: (_=>ys_23_바꿔치기())};
    return 결과;
}
{ // exports
    var ys_m = yaksokModules["common:저장공간"];
    ys_m.ys_18_스택_생성 = ys_18_스택_생성;
    ys_m.ys_21_큐_생성 = ys_21_큐_생성;
}
})();

// module: common:아희
(function () {
var ys_m_문자열 = yaksokModules["common:문자열"];
var ys_m_숫자 = yaksokModules["common:숫자"];
var ys_m_저장공간 = yaksokModules["common:저장공간"];
var ys_m_배열 = yaksokModules["common:배열"];
var ys_m_입출력 = yaksokModules["common:입출력"];
var 가의_코드포인트 = ys_m_문자열.ys_5__문자의_코드포인트("가");
var 힣의_코드포인트 = ys_m_문자열.ys_5__문자의_코드포인트("힣");
var 초성목록 = yaksokList([void 0, "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]);
var 중성목록 = yaksokList([void 0, "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"]);
var 종성목록 = yaksokList([void 0, "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]);
var 인자개수목록 = yaksokList([void 0, 0, 0, 2, 2, 2, 2, 1, 0, 1, 0, 1, 0, 2, 0, 1, 0, 2, 2, 0]);
var 가로속력목록 = yaksokList([void 0, 1, void 0, 2, void 0, (- 1), void 0, (- 2), void 0, 0, void 0, void 0, void 0, 0, 0, void 0, void 0, void 0, 0, void 0, "반사", "반사"]);
var 세로속력목록 = yaksokList([void 0, 0, void 0, 0, void 0, 0, void 0, 0, void 0, (- 1), void 0, void 0, void 0, (- 2), 1, void 0, void 0, void 0, 2, "반사", "반사", void 0]);
var 받침획수목록 = yaksokList([void 0, 0, 2, 4, 4, 2, 5, 5, 3, 5, 7, 9, 9, 7, 9, 9, 8, 4, 4, 6, 2, 4, 1, 3, 4, 3, 4, 4, 3]);
function ys_24__문자이_아희_코드(문자) {
    var 결과;
    var 코드포인트 = ys_m_문자열.ys_5__문자의_코드포인트(문자);
    if (((코드포인트 >= 가의_코드포인트) && (코드포인트 <= 힣의_코드포인트))) {
        결과 = true;
    } else {
        결과 = false;
    }
    return 결과;
}
function ys_25__문자이_아희_코드가_아님(문자) {
    var 결과;
    if (ys_24__문자이_아희_코드(문자)) {
        결과 = false;
    } else {
        결과 = true;
    }
    return 결과;
}
function ys_26__문자의_초성인덱스(문자) {
    var 결과;
    if (ys_25__문자이_아희_코드가_아님(문자)) {
        결과 = 0;
        return 결과;
    }
    var 음절코드 = (ys_m_문자열.ys_5__문자의_코드포인트(문자) - 가의_코드포인트);
    결과 = (ys_m_숫자.ys_10__숫자_소수점_아래_버림((음절코드 / 588)) + 1);
    return 결과;
}
function ys_27__문자의_중성인덱스(문자) {
    var 결과;
    if (ys_25__문자이_아희_코드가_아님(문자)) {
        결과 = 0;
        return 결과;
    }
    var 음절코드 = (ys_m_문자열.ys_5__문자의_코드포인트(문자) - 가의_코드포인트);
    결과 = ((ys_m_숫자.ys_10__숫자_소수점_아래_버림((음절코드 / 28)) % 21) + 1);
    return 결과;
}
function ys_28__문자의_종성인덱스(문자) {
    var 결과;
    if (ys_25__문자이_아희_코드가_아님(문자)) {
        결과 = 0;
        return 결과;
    }
    var 음절코드 = (ys_m_문자열.ys_5__문자의_코드포인트(문자) - 가의_코드포인트);
    결과 = (ys_m_숫자.ys_10__숫자_소수점_아래_버림((음절코드 % 28)) + 1);
    return 결과;
}
function ys_29__문자열으로부터_코드공간_생성(문자열) {
    var 결과;
    var 줄목록 = ys_m_문자열.ys_8__문자열_줄바꿈마다_쪼개기(문자열);
    for (let 인덱스 of yaksokRange(1, 줄목록.길이)) {
        줄목록[인덱스] = ys_m_문자열.ys_9__문자열_글자마다_쪼개기(줄목록[인덱스]);
    }
    for (let 줄 of 줄목록) {
        for (let 인덱스 of yaksokRange(1, 줄.길이)) {
            var 문자 = 줄[인덱스];
            var 초성인덱스 = ys_26__문자의_초성인덱스(문자);
            var 중성인덱스 = ys_27__문자의_중성인덱스(문자);
            var 종성인덱스 = ys_28__문자의_종성인덱스(문자);
            줄[인덱스] = {문자: 문자, 초성인덱스: 초성인덱스, 중성인덱스: 중성인덱스, 종성인덱스: 종성인덱스, 초성: 초성목록[초성인덱스], 중성: 중성목록[중성인덱스], 종성: 종성목록[종성인덱스]};
        }
    }
    결과 = 줄목록;
    return 결과;
}
function ys_30__코드공간에서_커서가_가르키는_코드(코드공간, 커서) {
    var 결과;
    var 줄 = 코드공간[커서.행];
    if ((줄 === void 0)) {
        결과 = void 0;
    } else {
        결과 = 줄[커서.열];
    }
    return 결과;
}
function ys_31__커서_반사(커서) {
    var 결과;
    커서.가로속력 = (- 커서.가로속력);
    커서.세로속력 = (- 커서.세로속력);
    return 결과;
}
function ys_32__커서_회전_중성인덱스(커서, 중성인덱스) {
    var 결과;
    var 가로속력 = 가로속력목록[중성인덱스];
    var 세로속력 = 세로속력목록[중성인덱스];
    if ((세로속력 === "반사")) {
        커서.세로속력 = (- 커서.세로속력);
    } else {
        if ((세로속력 === void 0)) {
            void 0;
        } else {
            커서.세로속력 = 세로속력;
        }
    }
    if ((가로속력 === "반사")) {
        커서.가로속력 = (- 커서.가로속력);
    } else {
        if ((가로속력 === void 0)) {
            void 0;
        } else {
            커서.가로속력 = 가로속력;
        }
    }
    return 결과;
}
function ys_33__코드공간에서_커서를_다음_위치로_이동시키기(코드공간, 커서) {
    var 결과;
    커서.행 = (커서.행 + 커서.세로속력);
    커서.열 = (커서.열 + 커서.가로속력);
    var 줄 = 코드공간[커서.행];
    if ((줄 === void 0)) {
        var 너비 = 0;
    } else {
        너비 = 줄.길이;
    }
    var 높이 = 코드공간.길이;
    if (((커서.열 < 1) && (커서.가로속력 < 0))) {
        커서.열 = 너비;
    }
    if (((커서.열 > 너비) && (커서.가로속력 > 0))) {
        커서.열 = 1;
    }
    if (((커서.행 < 1) && (커서.세로속력 < 0))) {
        커서.행 = 높이;
    }
    if (((커서.행 > 높이) && (커서.세로속력 > 0))) {
        커서.행 = 1;
    }
    return 결과;
}
function ys_34__아희코드_실행(아희코드) {
    var 결과;
    var 저장공간목록 = yaksokList([void 0]);
    for (let 종성 of 종성목록) {
        if (((종성 === "ㅇ") || (종성 === "ㅎ"))) {
            var 저장공간 = ys_m_저장공간.ys_21_큐_생성();
        } else {
            저장공간 = ys_m_저장공간.ys_18_스택_생성();
        }
        ys_m_배열.ys_12__배열의_마지막에_값_넣기(저장공간목록, 저장공간);
    }
    var 현재저장공간 = 저장공간목록[1];
    var 커서 = {행: 1, 열: 1, 세로속력: 1, 가로속력: 0};
    var 코드공간 = ys_29__문자열으로부터_코드공간_생성(아희코드);
    while (true) {
        var 코드 = ys_30__코드공간에서_커서가_가르키는_코드(코드공간, 커서);
        if (((코드 === void 0) || (코드.초성인덱스 === 0))) {
            void 0;
        } else {
            if ((현재저장공간.내용.길이 < 인자개수목록[코드.초성인덱스])) {
                ys_32__커서_회전_중성인덱스(커서, 코드.중성인덱스);
                ys_31__커서_반사(커서);
            } else {
                ys_32__커서_회전_중성인덱스(커서, 코드.중성인덱스);
                if ((코드.초성 === "ㅇ")) {
                    void 0;
                } else {
                    if ((코드.초성 === "ㅎ")) {
                        break;
                    } else {
                        if ((코드.초성 === "ㄷ")) {
                            var 가 = yaksokCall(현재저장공간.뽑기);
                            var 나 = yaksokCall(현재저장공간.뽑기);
                            yaksokCall(현재저장공간.집어넣기, yaksokList([void 0, ys_m_숫자.ys_10__숫자_소수점_아래_버림((나 + 가))]));
                        } else {
                            if ((코드.초성 === "ㄸ")) {
                                가 = yaksokCall(현재저장공간.뽑기);
                                나 = yaksokCall(현재저장공간.뽑기);
                                yaksokCall(현재저장공간.집어넣기, yaksokList([void 0, ys_m_숫자.ys_10__숫자_소수점_아래_버림((나 * 가))]));
                            } else {
                                if ((코드.초성 === "ㅌ")) {
                                    가 = yaksokCall(현재저장공간.뽑기);
                                    나 = yaksokCall(현재저장공간.뽑기);
                                    yaksokCall(현재저장공간.집어넣기, yaksokList([void 0, ys_m_숫자.ys_10__숫자_소수점_아래_버림((나 - 가))]));
                                } else {
                                    if ((코드.초성 === "ㄴ")) {
                                        가 = yaksokCall(현재저장공간.뽑기);
                                        나 = yaksokCall(현재저장공간.뽑기);
                                        yaksokCall(현재저장공간.집어넣기, yaksokList([void 0, ys_m_숫자.ys_10__숫자_소수점_아래_버림((나 / 가))]));
                                    } else {
                                        if ((코드.초성 === "ㄹ")) {
                                            가 = yaksokCall(현재저장공간.뽑기);
                                            나 = yaksokCall(현재저장공간.뽑기);
                                            yaksokCall(현재저장공간.집어넣기, yaksokList([void 0, ys_m_숫자.ys_10__숫자_소수점_아래_버림((나 % 가))]));
                                        } else {
                                            if ((코드.초성 === "ㅁ")) {
                                                if ((코드.종성 === "ㅇ")) {
                                                    ys_m_입출력.ys_3_표준출력에_값_쓰기(yaksokCall(현재저장공간.뽑기));
                                                } else {
                                                    if ((코드.종성 === "ㅎ")) {
                                                        ys_m_입출력.ys_3_표준출력에_값_쓰기(ys_m_문자열.ys_6__코드포인트에_해당하는_문자(yaksokCall(현재저장공간.뽑기)));
                                                    }
                                                }
                                            } else {
                                                if ((코드.초성 === "ㅂ")) {
                                                    if ((코드.종성 === "ㅇ")) {
                                                        yaksokCall(현재저장공간.집어넣기, yaksokList([void 0, 0]));
                                                    } else {
                                                        if ((코드.종성 === "ㅎ")) {
                                                            yaksokCall(현재저장공간.집어넣기, yaksokList([void 0, 0]));
                                                        } else {
                                                            yaksokCall(현재저장공간.집어넣기, yaksokList([void 0, 받침획수목록[코드.종성인덱스]]));
                                                        }
                                                    }
                                                } else {
                                                    if ((코드.초성 === "ㅃ")) {
                                                        yaksokCall(현재저장공간.중복);
                                                    } else {
                                                        if ((코드.초성 === "ㅍ")) {
                                                            yaksokCall(현재저장공간.바꿔치기);
                                                        } else {
                                                            if ((코드.초성 === "ㅅ")) {
                                                                현재저장공간 = 저장공간목록[코드.종성인덱스];
                                                            } else {
                                                                if ((코드.초성 === "ㅆ")) {
                                                                    yaksokCall(저장공간목록[코드.종성인덱스].집어넣기, yaksokList([void 0, yaksokCall(현재저장공간.뽑기)]));
                                                                } else {
                                                                    if ((코드.초성 === "ㅈ")) {
                                                                        if ((yaksokCall(현재저장공간.뽑기) <= yaksokCall(현재저장공간.뽑기))) {
                                                                            yaksokCall(현재저장공간.집어넣기, yaksokList([void 0, 1]));
                                                                        } else {
                                                                            yaksokCall(현재저장공간.집어넣기, yaksokList([void 0, 0]));
                                                                        }
                                                                    } else {
                                                                        if ((코드.초성 === "ㅊ")) {
                                                                            if ((yaksokCall(현재저장공간.뽑기) === 0)) {
                                                                                ys_31__커서_반사(커서);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        ys_33__코드공간에서_커서를_다음_위치로_이동시키기(코드공간, 커서);
    }
    if ((현재저장공간.내용.길이 > 0)) {
        결과 = yaksokCall(현재저장공간.뽑기);
    } else {
        결과 = 0;
    }
    return 결과;
}
{ // exports
    var ys_m = yaksokModules["common:아희"];
    ys_m.ys_24__문자이_아희_코드 = ys_24__문자이_아희_코드;
    ys_m.ys_25__문자이_아희_코드가_아님 = ys_25__문자이_아희_코드가_아님;
    ys_m.ys_26__문자의_초성인덱스 = ys_26__문자의_초성인덱스;
    ys_m.ys_27__문자의_중성인덱스 = ys_27__문자의_중성인덱스;
    ys_m.ys_28__문자의_종성인덱스 = ys_28__문자의_종성인덱스;
    ys_m.ys_29__문자열으로부터_코드공간_생성 = ys_29__문자열으로부터_코드공간_생성;
    ys_m.ys_30__코드공간에서_커서가_가르키는_코드 = ys_30__코드공간에서_커서가_가르키는_코드;
    ys_m.ys_31__커서_반사 = ys_31__커서_반사;
    ys_m.ys_32__커서_회전_중성인덱스 = ys_32__커서_회전_중성인덱스;
    ys_m.ys_33__코드공간에서_커서를_다음_위치로_이동시키기 = ys_33__코드공간에서_커서를_다음_위치로_이동시키기;
    ys_m.ys_34__아희코드_실행 = ys_34__아희코드_실행;
}
})();

// entry point: common:메인
(function () {
var ys_m_파일 = yaksokModules["common:파일"];
var ys_m_입출력 = yaksokModules["common:입출력"];
var ys_m_아희 = yaksokModules["common:아희"];
var ys_m_문자열 = yaksokModules["common:문자열"];
var 코드 = ys_m_파일.ys_0__경로_텍스트_읽기(ys_m_입출력.ys_1_실행인자()[3]);
yaksokLog("코드:");
yaksokLog(코드);
yaksokLog("결과:");
ys_m_아희.ys_34__아희코드_실행(코드);
yaksokLog(ys_m_문자열.ys_7_줄바꿈_문자());
{ // exports
    var ys_m = yaksokModules["common:메인"];
}
})();

})();
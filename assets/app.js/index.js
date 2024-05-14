// リストアイテムの数
let totalItems = 45;
// ページサイズ
let pageSize = 15;
// 現在のページ
let currentPage = 1;

// for (let i = 1; i <= 15; i++) {
//     // 新しい画像要素を作成し、src属性を設定
//     const monster = document.createElement("img");
//     monster.src = `assets/img/monster-${i}.JPEG`;

//     // 画像をリストに追加
//     const imageList = document.getElementById("imageList");
//     const listItem = document.createElement("li");

//     // リスト項目にクラスを追加
//     listItem.classList.add("grid-item");

//     // リスト項目にモンスター名を追加するPタグを作成
//     const monsterName = document.createElement("p");
//     monsterName.textContent = getMonsterName(i); // モンスター名を取得

//     // p タグにクラスを追加
//     monsterName.classList.add("cara-name-list");

//     listItem.appendChild(monster);
//     imageList.appendChild(listItem);
//     listItem.appendChild(monsterName);
// }

    // // リスト項目にモンスター名を追加
    function getMonsterName(index) {
        switch (index) {
            case 1:
                return "N：スライム 火";
            case 2:
                return "N：とびめだま 火";
            case 3:
                return "N：デク 火";
            case 4:
                return "R：ハンター 火";
            case 5:
                return "R：かにおとこ 火";
            case 6:
                return "R：ひとくいばな 火";
            case 7:
                return "R：ゴブリン 火";
            case 8:
                return "R：マッシュ 火";
            case 9:
                return "R：オーク 火";
            case 10:
                return "R：ミミック 火";
            case 11:
                return "R：ウルフ 火";
            case 12:
                return "R：ツボ 火";
            case 13:
                return "R：クマ 火";
            case 14:
                return "R：オニ 火";
            case 15:
                return "R：ホネ 火";
            case 16:
                return "N：スライム 水";
            case 17:
                return "N：とびめだま 水";
            case 18:
                return "N：デク 水";
            case 19:
                return "R：ハンター 水";
            case 20:
                return "R：かにおとこ 水";
            case 21:
                return "R：ひとくいばな 水";
            case 22:
                return "R：ゴブリン 水";
            case 23:
                return "R：マッシュ 水";
            case 24:
                return "R：オーク 水";
            case 25:
                return "R：ミミック 水";
            case 26:
                return "R：ウルフ 水";
            case 27:
                return "R：ツボ 水";
            case 28:
                return "R：クマ 水";
            case 29:
                return "R：オニ 水";
            case 30:
                return "R：ホネ 水";
            case 31:
                return "N：スライム 風";
            case 32:
                return "N：とびめだま 風";
            case 33:
                return "N：デク 風";
            case 34:
                return "R：ハンター 風";
            case 35:
                return "R：かにおとこ 風";
            case 36:
                return "R：ひとくいばな 風";
            case 37:
                return "R：ゴブリン 風";
            case 38:
                return "R：マッシュ 風";
            case 39:
                return "R：オーク 風";
            case 40:
                return "R：ミミック 風";
            case 41:
                return "R：ウルフ 風";
            case 42:
                return "R：ツボ 風";
            case 43:
                return "R：クマ 風";
            case 44:
                return "R：オニ 風";
            case 45:
                return "R：ホネ 風";
            // 他のモンスターについても同様に追加
            default:
                return "Monster " + index;
        }
    }

// ページを更新する関数
function updatePage() {
    const imageList = document.getElementById("imageList");
    imageList.innerHTML = ""; // リストをクリア

    // 現在のページに表示されるアイテムの範囲を計算
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);

    // 現在のページに対応するアイテムのみを表示
    for (let i = startIndex + 1; i <= endIndex; i++) {
        const monster = document.createElement("img");
        monster.src = `assets/img/monster-${i}.JPEG`;

        const listItem = document.createElement("li");
        listItem.classList.add("grid-item");

        const monsterName = document.createElement("p");
        monsterName.textContent = getMonsterName(i);

        monsterName.classList.add("cara-name-list");

        listItem.appendChild(monster);
        listItem.appendChild(monsterName);
        imageList.appendChild(listItem);
    }
}

// 初回ページの更新
updatePage();

// ページネーションコントロールの追加
const paginationContainer = document.getElementById("pagination");
const totalPages = Math.ceil(totalItems / pageSize);
for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.classList.add("pagination-button");
    pageButton.addEventListener("click", function() {
        currentPage = i;
        updatePage();
    });
    paginationContainer.appendChild(pageButton);
}

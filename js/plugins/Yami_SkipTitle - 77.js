/*:
 * @plugindesc Skip the title scene for testing purpose.
 * @version 1.0
 */

(function() {

    Scene_Boot.prototype.start = function() {
       var savefileId = 1; // 这是要加载的存档文件的 ID，通常是 1、2、3 等。

// 2. 调用 DataManager.loadGame 函数加载存档
if (DataManager.loadGame(savefileId)) {
    // 存档文件成功加载，可以继续游戏或执行其他操作
    // 例如，跳转到 `Scene_Map` 场景以继续游戏
    SceneManager.goto(Scene_Map);
} else {
    // 加载存档失败，可能是文件不存在或存档损坏
    // 在这里可以执行错误处理逻辑
    console.error('Failed to load savefile ' + savefileId);
}
    };

})();

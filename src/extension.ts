import { ColorDefine } from "./fs-context/internal";
import { Block, Collaborator, Extension, Menu, Translator } from "./fs-context/structs";
let translator = new Translator();
translator.store({
    "zh-cn": {
        name: "我的拓展",
        des: "这是我的第一个拓展",
        tanchuang: "弹窗"
    }
});
export default class MyExtension extends Extension {
    id = "myextension";
    displayName = translator.load("name");
    allowSandboxed = false;
    blocks = [
        Block.create(
            translator.load("tanchuang"),
            {
                name: "$content",
                inputType: "string",
                value: "something"
            },
            "到浏览器窗口",
            "，后缀为",
            {
                name: "$suffix",
                inputType: "menu",
                value: "suffix"
            }
        ).config({
            type: "command",
            method(args) {
                alert(args.$content + " " + args.$suffix);
            }
        })
    ];
    menus = [
        new Menu("suffix", [
            { name: "已打印", value: "printed" },
            { name: "已输出", value: "output" },
            { name: "已显示", value: "displayed" }
        ])
    ];
    description = translator.load("des");
    collaborators = [
        new Collaborator("FallingShrimp", "https://f-shrimp.solariix.com")
    ];
    colors: ColorDefine = {
        theme: "#ff0000"
    };
}
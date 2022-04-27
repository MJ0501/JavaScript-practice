export default function (data) {
    return Object.prototype.toString.call(data).slice(8,13)
}
//export default 123 -----default 는 오직 한 번만 사용가능! export할 때
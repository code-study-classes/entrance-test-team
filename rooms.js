import hotels from "./hotels";
function getsBedsCount(category){
    if (category === "Стандарт"|| category === "Люкс") {
        return 2;
    }else if (category === "Апартаменты") {
        return 4;
    }
function getsStatus(status= "свободен") {

}
}
const rooms = [
    {
        hotel: hotels.indexOf(0),
        room_id:101,
        room_number:"101A",
        category:"Стандарт",
        beds_count:getsBedsCount(),
        status:,
    }
]
var Queue = function() {
    var items = [];
    //入队
    this.enqueue = function(element) {
            items.push(element);
        }
        //出队
    this.dequeue = function(element) {
            return items.shift();
        }
        //查看队列头
    this.dequeue = function(element) {
            return items[0];
        }
        //检查队列是否为空
    this.isEmpty = function() {
            return items.length == 0;
        }
        //队列大小
    this.size = function() {
            return items.length;
        }
        //查看队列头
    this.front = function() {
        return items[0];
    }
}
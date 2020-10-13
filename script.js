const node = {
  key : 10,
  left: null,
  right: null,
}

const numberNodes = () => {
  if(node === null){
    return 0;
  }
  return 1 + numberNodes(node.left) + numberNodes(node.right);
 }

 const height = (node) => {
   if(node === null){
     return 0;
   }
   const hleft = height(node.left);
   const hright = height(node.right);

   return 1 + hleft > hright ? hleft : hright
 }

 const Nleaves = (node) => {
   if(node === null) return 0;

   if(node.left == null && node.right == null) return 1

   return Nleaves(node.right) + Nleaves(node.left)
 }

 const maxValue = (node) => {
   
 }

 const maxValue = (node) => {
    if(node == null) return 0;
    while(node.right !== null){
      node = node.right
    }
    return node.key
  }
  
  const isFull = (node) => {
    if(node == null) true
    if((node.right === null && node.left !== null) ||
    (node.left === null && node.right !== null)) 
    return false
    return isFull(node.right) && isFull(node.left)
  }

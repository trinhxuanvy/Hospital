export class SetUp {
    public SetDisPlay(idItem: string, display: string) {
        let getItem = document.getElementById(idItem);
        getItem.style.display = display;
    }
    public SetImage(idItem: string, srcImage: string) {
        let imageParent = document.getElementById(idItem);
        imageParent.removeChild(imageParent.firstChild);

        let image = document.createElement('img');
        image.src = '../../../assets/images/' + srcImage;  
        imageParent.appendChild(image);
    }
}
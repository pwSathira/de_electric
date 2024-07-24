export default function handler(req, res) {
    const images = [
        'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://apelectricinc.com/wp-content/uploads/2020/08/IMG_8857-e1596397916774.jpg',
        'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://apelectricinc.com/wp-content/uploads/2020/08/IMG_8857-e1596397916774.jpg',
        'https://apelectricinc.com/wp-content/uploads/2020/08/IMG_8855-e1596397924292.jpg',
        'https://apelectricinc.com/wp-content/uploads/2020/08/IMG_5840-e1596397997219.jpg',
        'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://apelectricinc.com/wp-content/uploads/2020/08/IMG_5850-e1596397986982.jpg',
    ];
    res.status(200).json(images);
}
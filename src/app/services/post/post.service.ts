import { Injectable } from '@angular/core';
import { IPost } from '../../models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: IPost[] = [
    {
      author_name: 'Postman',
      author_profile: '/assets/profile.png',
      author_description: 'REST API Documentation',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() - 6000,
      content_image: 'https://media-exp1.licdn.com/dms/image/C5622AQEUT-_6ePU8sQ/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=ibu9fJBE2NazenbZDTV-dw9KyAcziT_TbVwSsOb4VmI',
      likes: 45,
      comments: 1
    },
    {
      author_name: 'Amnon',
      author_profile: '/assets/profile.png',
      author_description: 'Disciple de Christ',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ',
      time: Date.now() - 360000,
      content_image: 'https://media-exp1.licdn.com/dms/image/C4D22AQFodrYY0ENRhg/feedshare-shrink_1280-alternative/0?e=1607558400&v=beta&t=bbXX-0VneCzYRUn5eiT6gJF8tr5mJUrlGtBt-DqLCPs',
      likes: 203,
      comments: 3070
    },
    {
      author_name: 'Amanda Malela',
      author_profile: 'https://media-exp1.licdn.com/dms/image/C4D22AQESOyvzzobsUA/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=skfWOBxqVALXqSfuAGDgMfMOQFMOLOot2lQNVK5_C7Y',
      author_description: 'Voyageur | Yoga | Experimentateur',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() - 70002000,
      content_image: 'https://media-exp1.licdn.com/dms/image/C4D22AQESOyvzzobsUA/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=skfWOBxqVALXqSfuAGDgMfMOQFMOLOot2lQNVK5_C7Y',
      likes: 236789,
      comments: 3000
    },
    {
      author_name: 'Amanda Ma',
      author_profile: 'https://media-exp1.licdn.com/dms/image/C4D22AQESOyvzzobsUA/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=skfWOBxqVALXqSfuAGDgMfMOQFMOLOot2lQNVK5_C7Y',
      author_description: 'Voyageur | Yoga | Experimentateur',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() - 70002000,
      content_image: 'https://media-exp1.licdn.com/dms/image/C5622AQGF5WRYFVWlqQ/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=Idah9IY0c3Cdnl1aM5ZTRBgLxgVTJiUvECw9THXdlK4',
      likes: 23007,
      comments: 30
    },
    {
      author_name: 'Rachid Mayouna',
      author_profile: 'https://media-exp1.licdn.com/dms/image/C4D22AQHC1o89uE2Cqg/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=9BneD-B0pP7ztEuf_7tVTaNBoZqi_lSziouJuTCFehQ',
      author_description: 'Entrepreneur ',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() - 700020000,
      content_image: 'https://media-exp1.licdn.com/dms/image/C4D22AQHC1o89uE2Cqg/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=9BneD-B0pP7ztEuf_7tVTaNBoZqi_lSziouJuTCFehQ',
      likes: 23007,
      comments: 30
    },
  ];

  constructor() {
    this.posts = this.posts.map(post => ({
      ...post,
      showMore: false,
    }));

    this.posts.forEach((post, index) => {
      post.id = index++;
    });

  }

  getPostById(id: number): IPost {
    return this.posts.find(post => {
        return post.id === id;
      });
  }


  getPosts() {
    return [...this.posts];
  }
}

// https://randomuser.me/api/
import { defineStore } from 'pinia';

type User = {
  gender: 'male' | 'female';
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
  };
  picture: {
    thumbnail: string;
    medium: string;
    large: string;
  };
};

type RandomUsers = {
  results: User[];
};

export const useUserStore = defineStore('user', {
  state: (): {
    user: User | null;
  } => {
    return {
      user: null,
    };
  },
  actions: {
    async fetchUser() {
      const url = 'https://randomuser.me/api/';

      const randomUsers: RandomUsers = await (await fetch(url)).json();

      this.user = randomUsers?.results[0] ?? null;
      return this.user;
    },
  },
});

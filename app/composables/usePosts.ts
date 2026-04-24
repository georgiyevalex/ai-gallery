interface IPostOptions {
  type?: "VIDEO" | "IMAGE";
}

interface IUser {
  id: string
  username: string
  display_name: string
  image: string
}

interface IPagination {
  total: number
  page: number
  size: number
  pages: number
}

interface IPost {
  id: string
  user_id: string
  user: IUser,
  generation_candidate_id: string
  preview: string
  preview_video: string
  aspect_ratio: string
  type: string
  limited: boolean
  order: number
  created_at: string // Date
  has_like: boolean
  has_view: boolean
  likes_count: number
  views_count: number
}

/* Можно ещё и так
interface IPostsResponse {
  items: IPost[]
  total: number
  page: number
  size: number
  pages: number
}
*/

interface IPostsResponse extends IPagination {
  items: IPost[]
}

export const usePosts = (options?: IPostOptions) => {
  const items = ref<IPost[]>([]);
  const page = ref(1);
  const totalPages = ref(1);
  const loadMoreEnabled = ref(false);
  const loading = ref(false);


  const fetchItems = async () => {
    if (loading.value || page.value > totalPages.value) return;
    loading.value = true;

    try {
      const response = await $fetch<IPostsResponse>('/api/v1/community/posts', {
        query: {
          page: page.value,
          ...(options?.type && { type__in: options?.type })
        }
      });

      items.value = [...items.value, ...response.items];

      loadMoreEnabled.value = response.pages > response.page;
      totalPages.value = response.pages;
      page.value++;
    }
    catch {}
    finally {
      loading.value = false;
    }
  }

  const onIntersectionObserver = ([entry]: IntersectionObserverEntry[]) => {
    if (!entry?.isIntersecting) return;
    fetchItems();
  }

  return {
    items,
    loading,
    loadMoreEnabled,
    fetchItems,
    onIntersectionObserver,
  }
}
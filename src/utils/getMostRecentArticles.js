import { sortedByDate } from './sortBy'

export const getMostRecentArticles = (articles, count = 10) => {

    const sorted = sortedByDate(articles, 'created_at', 'desc')
  return sorted.slice(0, count)
}



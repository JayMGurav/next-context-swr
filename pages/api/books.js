// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const books = [
  {
    title: 'Brief Answers to the Big Questions',
    author: 'Stephen Hawking',
    ISBN: '9781473696006, 1473696003',
    published: '16 October 2018',
    language: 'English'
  },
  {
    title: 'The Operator',
    author: 'Robert O\'Neill',
    ISBN: '9781501145056, 1501145053',
    published: '25 April 2017',
    language: 'English'
  },
  {
    title: 'The Engineering of Consent',
    author: 'Edward L. Bernays',
    published: '1947',
    language: 'English'
  },
  {
    title: 'Sapiens:A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    ISBN: '9781448190690, 144819069X',
    published: '4 September 2014',
    language: 'English'
  },

]
export default (req, res) => {
  res.status(200).json({ books })
}

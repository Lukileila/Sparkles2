import { createClient } from 'contentful';



const client = createClient({
  space: "lerti9id4rxk",                                       
    /*  import.meta.env.VITE_SPACE_ID, */
  accessToken: "wxR7_bR8_nE62t7-zKSB9fTUNEKFfQmGiiiWNZXJJco"                       
    /* import.meta.env.VITE_ACCESS_TOKEN, */
});

const getEntries = async () => {
  try {
    const getSomeEntries = await client.getEntries({
      content_type: 'product', 
    });

    console.log(getSomeEntries.items);
    return getSomeEntries.items;
  } catch (error) {
    console.error(error.message);
  }
};

const getEntry = async(id) => {
  try {
    const X = await client.getEntry(id);
    return X;
  } catch (error) {
    console.error(error.message);
  }
};

export { getEntries, getEntry };
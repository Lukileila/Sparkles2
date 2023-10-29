import { createClient } from 'contentful';


const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const getEntries = async () => {
  try {
    const getSomeEntries = await client.getEntries({
      content_type: 'product'
    });

    console.log(getSomeEntries.items);
    return getSomeEntries.items;
  } catch (error) {
    console.error(error.message);
  }
};

const getEntry = async(id) => {
  try {
    const X = await client.getEntry(`${id}`);
    console.log("Hello from getEntry")
    console.log("Single Entry Test X: ",X);
    return X.fields;
  } catch (error) {
    console.error(error.message);
  }
};

export { getEntries, getEntry };

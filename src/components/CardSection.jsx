/* eslint-disable react/prop-types */
import Card from './Card';

export default function CardSection ({ allEntries }) {
    return (
        <>
        <div className='flex justify-around items-center'>
        {allEntries.length > 0 ? (
  <div className='flex justify-around items-center flex-wrap'>
    {allEntries.map(({ fields, sys }) => (
      <Card key={sys.id} {...fields} {...sys} />
    ))}
  </div>
) : (
  <p>No products available.</p>
)}
        
        </div>
        </>
    )
}
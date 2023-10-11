/* eslint-disable react/prop-types */
import Card from './Card';

export default function CardSection ({ allEntries }) {
    return (
        <>
        <div className='flex justify-around items-center'>
        {allEntries.map(({ fields, sys }) => (
          <Card key={sys.id} {...fields} {...sys} />
        ))}
        
        </div>
        </>
    )
}
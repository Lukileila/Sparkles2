/* eslint-disable react/prop-types */
import Card from './Card';

export default function CardSection ({ allEntries }) {
    return (
        <>
        <div className='flex justify-around items-center'>
        {allEntries.map(({ id,fields, sys }) => (
          <Card key={id} {...fields} {...sys} />
        ))}
        
        </div>
        </>
    )
}
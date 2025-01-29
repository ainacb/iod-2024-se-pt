const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { name: 'Cougar', latinName: 'Puma concolor' },
    { name: 'Jaguar', latinName: 'Panthera onca' },
    { name: 'Leopard', latinName: 'Panthera pardus' },
    { name: 'Lion', latinName: 'Panthera leo' },
    { name: 'Snow leopard', latinName: 'Panthera uncia' },
    { name: 'Tiger', latinName: 'Panthera tigris' },
    ];

function SingleCat() {
    return (
        <>
            <h1>Info about individual cat that will be mapped over</h1>
        </>
    );
}


export function BigCats() {
    return (
        <>
            <h1>Cat List</h1>
        </>
    );
}
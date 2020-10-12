export interface IJsonSampleData {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    email: "michael.lawson@reqres.in"
    first_name: "Michael"
    id: 7
    last_name: "Lawson"
}

export interface IAdData {
    company: string,
    url: string,
    text: string
}

export interface IpagedData {
    ad: IAdData
    data: IJsonSampleData[]
    page: 2
    per_page: 6
    total: 12
    total_pages: 2
}
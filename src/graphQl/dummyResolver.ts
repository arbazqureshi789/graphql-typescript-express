export const DummyResolver = {
    hello(args:any , request:any){
        return {
            name: args.person.name,
            email: args.person.email
        };
    }
};
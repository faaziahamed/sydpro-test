import http from "@/http-common";

/* eslint-disable */
class MessageDataService {
    getAll(): Promise<any> {
        return http.get("/messages");
    }

    get(id: any): Promise<any> {
        return http.get(`/messages/${id}`);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`/messages/${id}`, data);
    }
}

export default new MessageDataService();

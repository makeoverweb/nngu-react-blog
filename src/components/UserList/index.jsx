import React from 'react';
import axios from 'axios';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }

  async fetchUsers() {
    this.setState({
      isLoading: true
    });

    await new Promise(resolve => setTimeout(resolve, 1000));
    try {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (response.status === 200) {
            this.setState({
              users: response.data,
              isLoading: false
            });
          }
        })

    } catch (e) {
      console.error(e.message);
      this.setState({
        isLoading: false,
      });
    }
  }

  componentDidMount() {
    return this.fetchUsers();
  }

  render() {
    return (
      <div className={'users'}>
        <h4>Пользователи</h4>
        <ol>
          {this.state.isLoading && <span>Загрузка...</span>}
          {
            this.state.users.map((user, i) => {
              return (
                <li key={i}>
                  <p>{user.name}</p>
                  <div>
                    Контакты:
                    <span>{user.email}</span>
                    <span>{user.phone}</span>
                  </div>

                </li>
              );
            })
          }
        </ol>
      </div>
    )
  }
}
import react from "react";

const Modal = ({ onClose, item }) => {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{item.name}</h5>
                    <button type="button" className="close" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
            <li>
              <h3>Description:</h3> {item.description}
            </li>
            <li>
                <h3>Comics:</h3> {item.comics.items.map(comic => (
                    <li key={comic.name}>{comic.name}</li>
                ))}
            </li>
            <li>
                <h3>Series:</h3> {item.series.items.map(serie => (
                    <li key={serie.name}>{serie.name}</li>
                ))}
            </li>
            <li>
                <h3>Stories:</h3> {item.stories.items.map(story => (
                    <li key={story.name}>{story.name}</li>
                ))}
            </li>
            <li>
                <h3>Events:</h3> {item.events.items.map(event => (
                    <li key={event.name}>{event.name}</li>
                ))}
            </li>
                </div>
            </div>
        </div>
    );
}

export default Modal;